package data_access;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * DbUtils.java - A collection of static JDBC helper methods.
 * 
 * The closeQuietly methods close resources, avoid closing if null and hide any
 * SQLExceptions that occur. These methods help us to avoid writing excessive
 * amounts of boilerplate code.
 * 
 * @author Kari
 * @version 1.1 2019-11-03
 */
public class DbUtils {

	public static void closeQuietly(ResultSet resultSet, PreparedStatement preparedStatement, Connection connection) {
		closeQuietly(resultSet);
		closeQuietly(preparedStatement, connection);
	}

	public static void closeQuietly(PreparedStatement preparedStatement, Connection connection) {
		closeQuietly(preparedStatement);
		closeQuietly(connection);
	}

	public static void closeQuietly(ResultSet resultSet) {
		try {
			if (resultSet != null) {
				resultSet.close();
			}
		} catch (SQLException sqle) {
		}
	}

	public static void closeQuietly(PreparedStatement preparedStatement) {
		try {
			if (preparedStatement != null) {
				preparedStatement.close();
			}
		} catch (SQLException sqle) {
		}
	}

	public static void closeQuietly(Connection connection) {
		try {
			if (connection != null) {
				connection.close();
			}
		} catch (SQLException sqle) {
		}
	}
}
