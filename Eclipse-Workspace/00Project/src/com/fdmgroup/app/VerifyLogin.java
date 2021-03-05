package com.fdmgroup.app;

import java.io.File;
import java.util.Scanner;

public class VerifyLogin {
	
	private static String filepath = "/Users/yabut/Desktop/testFileIn.txt";
	private static Scanner x;
	
	public VerifyLogin() {
		super();
	}

	public boolean authenticate(String username, String password) {
		
		boolean found = false;
		String tempUsername = "";
		String tempPassword = "";
		
		try {
			
			x = new Scanner(new File(filepath));
			x.useDelimiter("[,\n]");
			
			while(x.hasNext() && !found) {
				tempUsername = x.next();
				tempPassword = x.next();
				
				if(tempUsername.trim().equals(username.trim()) 
						&& tempPassword.trim().equals(password.trim())) {
					found = true;
				}
			}
			
			x.close();
			
		} catch (Exception e)
		{
			System.out.println("error");
		}
		
		return found;
		
	}

	public static String getFilepath() {
		return filepath;
	}

	public static void setFilepath(String filepath) {
		VerifyLogin.filepath = filepath;
	}

}

