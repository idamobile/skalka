package models;

public class ErrorResult {

	public int code;
	public String message;
	public boolean error = true;

	public static ErrorResult SUCCESS = new ErrorResult(false);
	
	private ErrorResult(boolean error){
		this.error = error;
		this.message = "success";
	}
	
	public ErrorResult(int code, String message) {
		this.code = code;
		this.message = message;
	}

	public ErrorResult() {
	}
	
}
