package Servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CalculatorServlet
 */
@WebServlet("/calculator")
public class CalculatorServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		PrintWriter out = response.getWriter();
		String x = request.getParameter("x");
		String y = request.getParameter("y");
		String operation = request.getParameter("operation");

		if (operation.equals("add")) {
			out.print((x + "+" +  y + "=" + (Integer.parseInt(x) + Integer.parseInt(y))));
		} else if (operation.equals("subtraction")) {
			out.print((x + "-" + y+ "=" + (Integer.parseInt(x) - Integer.parseInt(y))));
		} else if (operation.equals("multiply")) {
			out.print((x + "*" + y+ "="+ (Integer.parseInt(x) * Integer.parseInt(y))));
		} else {
			out.print((x + "/" + y+ "=" + (Integer.parseInt(x) / Integer.parseInt(y))));
		}
	}

}
