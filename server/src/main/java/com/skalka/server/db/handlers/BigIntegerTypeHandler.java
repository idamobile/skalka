package com.skalka.server.db.handlers;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

public class BigIntegerTypeHandler extends BaseTypeHandler {

	@Override
	public Object getNullableResult(ResultSet rs, String name) throws SQLException {
		return new BigInteger(rs.getString(name));
	}

	@Override
	public Object getNullableResult(CallableStatement cs, int i) throws SQLException {
		return new BigInteger(cs.getString(i));
	}

	@Override
	public void setNonNullParameter(PreparedStatement ps, int i, Object parameter, JdbcType jdbcType)
			throws SQLException {
		ps.setBigDecimal(i, new BigDecimal((BigInteger) parameter));
	}

}
