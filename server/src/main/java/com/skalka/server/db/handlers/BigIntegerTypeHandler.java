package com.skalka.server.db.handlers;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

public class BigIntegerTypeHandler extends BaseTypeHandler {

	@Override
	public Object getNullableResult(ResultSet rs, String name) throws SQLException {
		System.out.println("getNullable	Result1 " + rs.getString(name));

		return null;
	}

	@Override
	public Object getNullableResult(CallableStatement arg0, int arg1) throws SQLException {
		System.out.println("getNullableResult2 " + arg1);
		return null;
	}

	@Override
	public void setNonNullParameter(PreparedStatement arg0, int arg1, Object arg2, JdbcType arg3)
			throws SQLException {
		System.out.println("setNonNullParameter3 " + arg1);
	}

}
