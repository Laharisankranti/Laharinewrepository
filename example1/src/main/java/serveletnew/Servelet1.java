package serveletnew;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jdbc1.Jdbcconnection;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;

/**
 * Servlet implementation class Servelet1
 */
@WebServlet("/insert")
public class Servelet1 extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public Servelet1() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		int id = Integer.parseInt(request.getParameter("id"));
        String name = request.getParameter("name");

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        try (Connection conn = Jdbcconnection.getConnection();
             PreparedStatement ps = conn.prepareStatement("INSERT INTO firsttable (id, name) VALUES (?, ?)")) {

            ps.setInt(1, id);
            ps.setString(2, name);

            int result = ps.executeUpdate();

            if (result > 0) {
                out.println("<h3 style='color:green;'>Record inserted successfully!</h3>");
            } else {
                out.println("<h3 style='color:red;'>Insertion failed.</h3>");
            }

        } catch (Exception e) {
             e.printStackTrace() ;
        }

        out.println("<br><a href='index.jsp'>Insert Another Record</a>");
    }
	}


