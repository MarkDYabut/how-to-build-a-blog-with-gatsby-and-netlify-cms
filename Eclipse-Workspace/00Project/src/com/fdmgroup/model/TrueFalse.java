package com.fdmgroup.model;

public class TrueFalse extends Question{

	private static String falseStatement;
	private static String trueStatement;
	
	public TrueFalse(String topic, String question, String trueStatement, String falseStatement) {
		super();
		// TODO Auto-generated constructor stub
		this.setTopic(topic);
		this.setQuestion(question);
		this.setFalseStatement(falseStatement);
		this.setTrueStatement(trueStatement);
	}
	
	public static String getFalseStatement() {
		return falseStatement;
	}
	public void setFalseStatement(String falseStatement) {
		TrueFalse.falseStatement = falseStatement;
	}
	
	public static String getTrueStatement() {
		return trueStatement;
	}
	public void setTrueStatement(String trueStatement) {
		TrueFalse.trueStatement = trueStatement;
	}
	public void printQuestion() {
		System.out.println(
			"\nTopic: " + getTopic() +
			"\nQuestion: " + getQuestion() +
			"\n(" + getTrueStatement() + ")" +
			"\n" + getFalseStatement());
	}
	
}
