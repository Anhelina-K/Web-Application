package Servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.*;
import model.Student;
/**
 * Servlet implementation class JsonServlet
 */
@WebServlet("/jsontest")
public class JsonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");

		Student[] studentArray = { new Student(40, "Ginger", "Baker", "Rumputie 10", "54120", "PULP"),
				new Student(30, "Diana", "Doe", "Kuusikuja 6", "01200", "VANTAA") };

		Gson gson = new Gson();
		String json = gson.toJson(studentArray);
		out.print(json);
	}

}

/**
 * Entity class: Student
 * 
 * @author Kari
 * @version 1.1 3.11.2019
 */
