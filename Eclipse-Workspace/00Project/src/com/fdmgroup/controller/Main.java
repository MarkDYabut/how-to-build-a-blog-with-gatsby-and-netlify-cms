package com.fdmgroup.controller;

import com.fdmgroup.app.TaskTimer;
import com.fdmgroup.app.VerifyLogin;
import com.fdmgroup.model.*;

public class Main {

	public static void main(String[] args) {
	
		User user1 = new User("Matt","1234");
		
		user1.login();
		user1.doTask("Java",5000); 
		// "Java" is to be a "Statistic Object" which will be incremented
		
		// TODO
		// user1.doTest()
		// user1.manageAccount() -> CRUD
		// user1.manageQuestions() -> CRUD
		// user1.manageStatistics() -> CRUD
		
	}
	
	static void setTask(String task, int time) {
		TaskTimer taskTimer = new TaskTimer(task, time);
		taskTimer.startTaskTimer();
	}
	
	static boolean login(String user, String password) {
		VerifyLogin verifyLogin = new VerifyLogin();
		boolean authenticated = verifyLogin.authenticate(user,password);
		System.out.println(authenticated);
		return authenticated;
	}

}
