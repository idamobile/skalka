package com.skalka.server.db.handlers;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

import com.skalka.server.domain.Gender;

public class GenderTypeHandler extends BaseTypeHandler {

	@Override
	public Object getNullableResult(ResultSet rs, String name) throws SQLException {
		return Gender.parse(rs.getString(name));
	}

	@Override
	public Object getNullableResult(CallableStatement cs, int i) throws SQLException {
		return Gender.parse(cs.getString(i));
	}

	@Override
	public void setNonNullParameter(PreparedStatement ps, int i, Object param, JdbcType type)
			throws SQLException {
		ps.setString(i, ((Gender) param).toString());
	}
}
