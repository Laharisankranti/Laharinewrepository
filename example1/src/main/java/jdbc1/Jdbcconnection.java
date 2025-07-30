package jdbc1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Jdbcconnection {
	public static Connection getConnection() throws Exception {
	    Class.forName("com.mysql.cj.jdbc.Driver");
	    String url = "jdbc:mysql://localhost:3306/lahari";
	    String user = "root";
	    String password = "Lahari@2003";
	    return DriverManager.getConnection(url, user, password);
	}
	public static void main(String[] args) {
        String jdbcURL = "jdbc:mysql://localhost:3306/lahari";
        String dbUser = "root";
        String dbPassword = "Lahari@2003";

        Connection connection = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(jdbcURL, dbUser, dbPassword);
            System.out.println("Connected to database!");

            String insertQuery = "INSERT INTO firsttable (id, name) VALUES (?, ?)";
            PreparedStatement insertStmt = connection.prepareStatement(insertQuery);
            insertStmt.setInt(1, 2);  
            insertStmt.setString(2, "Alice");
            insertStmt.executeUpdate();
            System.out.println("Data inserted.");

            String selectQuery = "SELECT * FROM firsttable";
            Statement selectStmt = connection.createStatement();
            ResultSet resultSet = selectStmt.executeQuery(selectQuery);

            System.out.println("\nRecords:");
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                System.out.println(id + ": " + name);
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (connection != null)
                    connection.close();
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
    }
}
