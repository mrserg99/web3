package bean;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "points", schema = "public")
public class Point{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id",unique=true, nullable = false)
    private Long id;
    @Column(name = "x")
    private double X;
    @Column(name = "y")
    private double Y;
    @Column(name = "r")
    private int R;
    @Column(name = "iscorrect")
    private boolean result;


    public Point(){
    }

    public Point(double X, double Y, int R, String result){
        this.R = R;
        this.X = X;
        this.Y = Y;
    }

    public void setX(double x) {
        X = x;
    }

    public void setY(double y) {
        Y = y;
    }

    public void setR(int r) {
        R = r;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public boolean isResult() {
        return result;
    }

    public double getX() {
        return X;
    }

    public double getY() {
        return Y;
    }

    public int getR() {
        return R;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Point point = (Point) o;
        return Double.compare(point.getX(), getX()) == 0 && Double.compare(point.getY(), getY()) == 0 && getR() == point.getR() && isResult() == point.isResult() && getId().equals(point.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getX(), getY(), getR(), isResult());
    }

    @Override
    public String toString() {
        return X + "," + Y + "," + R + "," + result + ";";
    }
}
