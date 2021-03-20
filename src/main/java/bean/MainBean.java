package bean;

import org.primefaces.context.RequestContext;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import javax.faces.context.SessionMap;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.io.Serializable;
import java.sql.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Map;



@ManagedBean (name="main") // определение managed bean и его наименования поэтому мы его не описываем в faces-config.xml
@SessionScoped           // аннотация определения времени жизни - managed bean сессионной
public class MainBean implements Serializable
{

    private Integer[] rs = {1, 2, 3, 4, 5};
    private ArrayList<Point> points = new ArrayList<Point>();
    private HashSet<Integer> valuesR = new HashSet<Integer>(Arrays.asList(rs));

    public void validate() throws ClassNotFoundException, SQLException {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        Map<String, String> params = facesContext.getExternalContext().getRequestParameterMap();
        if (params.get("X-value") != null || params.get("Y-value") != null || params.get("R-value") != null ||
                Double.parseDouble(params.get("X-value")) > -2 || Double.parseDouble(params.get("X-value")) < 1.5 ||
                Double.parseDouble(params.get("Y-value")) > -3 || Double.parseDouble(params.get("X-value")) < 5) {
            EntityManagerFactory emf = Persistence.createEntityManagerFactory("Results");
            EntityManager em = emf.createEntityManager();

            Point point = new Point();
            point.setX(Double.parseDouble(params.get("X-value")));
            point.setY(Double.parseDouble(params.get("Y-value")));
            point.setR(Integer.parseInt(params.get("R-value")));
            point.setResult(checkODZ(Double.parseDouble(params.get("X-value")),
                    Double.parseDouble(params.get("Y-value")), Integer.parseInt(params.get("R-value"))));

            em.getTransaction().begin();
            em.persist(point);
            em.getTransaction().commit();
            em.close();
            points.add(point);
            RequestContext.getCurrentInstance().update("tableResults");
            RequestContext.getCurrentInstance().execute("paintPoint(" + point.getX() + "," + point.getY() +
                    "," + point.getR() + "," + point.isResult() + ")");
        }
    }

    public void getPoint(){
        RequestContext.getCurrentInstance().execute("takerData(" + "\"" + points.toString()+ "\"" + ")");
    }

    private boolean checkODZ(double x, double y, int r) {
        return x >= 0 && x <= r && y >= 0 && y <= r && Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2) || // проверка окружности
                x <= 0 && x >= -r && y <= 0 && y >= -(r/2) && y - 0.5*x >= -2*r || // проверка треугольника
                x <= 0 && x >= -r && y >= 0 && y <= (r/2); // проверка прямоугольника
    }

    public void setPoints(ArrayList<Point> points) {
        this.points = points;
    }

    public ArrayList<Point> getPoints() {
        return points;
    }
}
