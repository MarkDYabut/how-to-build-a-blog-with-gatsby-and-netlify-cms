package com.fdmgroup.app;

import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;

public class TaskTimer {
	
	String taskName;
	int taskDuration;

	public TaskTimer(String taskName, int taskDuration) {
		// TODO Auto-generated constructor stub
		this.taskName = taskName;
		this.taskDuration = taskDuration;
	}
	
	public void startTaskTimer() {
		
        System.out.println("Task started on: " + new Date() + "\n" +
	              "Task name: " + taskName + "\n" + "Task duration: " + taskDuration/1000 + " seconds" + "\n");
        
		Timer timer = new Timer(taskName);
        
	    TimerTask task = new TimerTask() {
	        public void run() {
	            System.out.println("Task '" + Thread.currentThread().getName() + " ID:" + Thread.currentThread().getId() + "'\nTask finished on: " + new Date() + "\n");
	        }
	    };
	    
	    timer.schedule(task, taskDuration);		
	}
}
