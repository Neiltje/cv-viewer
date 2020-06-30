package com.nwj.cvviewer.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import java.util.Set;

@Entity
public class UserDetails extends CvBaseItem {

	private static final long serialVersionUID = 5929027118267635155L;

	private String userName;
	private String userPassword;
	private String userRoles;
	private Set<CvPermissions> permissions;

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

	@ManyToMany(mappedBy = "users", fetch = FetchType.LAZY)
	@JsonIgnore
	public Set<CvPermissions> getPermissions() {
		return permissions;
	}

	public void setPermissions(Set<CvPermissions> permissions) {
		this.permissions = permissions;
	}
}