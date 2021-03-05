package com.fdmgroup.model;

import com.fdmgroup.app.TaskTimer;
import com.fdmgroup.app.VerifyLogin;

public class User {
	private String username;
	private String password;
	private boolean authenticated = false;
	
	private Account account;
	
	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	public void login() {
		VerifyLogin verifyLogin = new VerifyLogin();
		authenticated = verifyLogin.authenticate(username,password);
		
		System.out.println("login successful?: " + authenticated);
		
		if(authenticated) {
			// setAccount
		}	
	}
	
	// String statistic -> Statistic statistic
	public void doTask(String statistic, int time) {
		
		if(authenticated) {
			TaskTimer taskTimer = new TaskTimer(statistic, time);
			taskTimer.startTaskTimer();
			// setTask will increment statistic.timeContributed
		}
	}
	
	// String statistic -> Statistic statistic
	public void doTest(String statistic) {
		
		if(authenticated) {
			// takeTest(generateTest(statistic))
			// takeTest will also increment statistic.timeContributed
		}
		
	}
	
	public void manageAccount(String operation) {
		
		if(authenticated) {
			// CRUD operations -> talks to AccountDAO
		}
		
	}
	
	public void manageQuestions(String operation) {
		
		if(authenticated) {
			// CRUD operations -> talks to QuestionBankDAO
		}
		
	}
	
	public void manageStatistics(String operation) {
		
		if(authenticated) {
			// CRUD operations -> talks to StatisticDAO
		}
		
	}
	
	
}