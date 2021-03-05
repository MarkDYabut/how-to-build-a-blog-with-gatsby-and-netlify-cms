package com.fdmgroup.model;

public abstract class Question {
	private static String topic;
	private static String question;	
	
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		Question.question = question;
	}
	public String getTopic() {
		return topic;
	}
	public void setTopic(String topic) {
		Question.topic = topic;
	}
}
