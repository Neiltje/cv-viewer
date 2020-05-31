package com.nwj.cvviewer.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class UserDetails extends CvBaseItem {

	private static final long serialVersionUID = 5929027118267635155L;

	private String userName;
	private String userPassword;
	private String userRoles;

	@Column
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Column
	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	@Column
	public String getUserRoles() {
		return userRoles;
	}

	public void setUserRoles(String userRoles) {
		this.userRoles = userRoles;
	}

}