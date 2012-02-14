package models;

public class ErrorResult {

	public int code;
	public String message;
	public boolean error = true;

	public ErrorResult(int code, String message) {
		this.code = code;
		this.message = message;
	}

	public ErrorResult() {
	}

}
