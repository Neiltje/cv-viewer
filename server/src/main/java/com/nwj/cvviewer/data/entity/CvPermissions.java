package com.nwj.cvviewer.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Set;

@Entity
public class CvPermissions extends CvBaseItem {

	private static final long serialVersionUID = 5435027118260036155L;

	private CvData cvData;
	private UserDetails owner;
	private Set<UserDetails> users;

	/**
	 * @return the cvData
	 */
	@OneToOne
	@JoinColumn(name = "cv_data_id")
	public CvData getCvData() {
		return cvData;
	}

	public void setCvData(CvData cvData) {
		this.cvData = cvData;
	}

	/**
	 * @return the owner
	 */
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "owner_user_id", nullable = false)
	public UserDetails getOwner() {
		return owner;
	}

	public void setOwner(UserDetails owner) {
		this.owner = owner;
	}

	@ManyToMany
	@JoinTable(name = "cvpermissions_users",
			   joinColumns = @JoinColumn(name = "permission_id"),
			   inverseJoinColumns = @JoinColumn(name = "user_id"))
	public Set<UserDetails> getUsers() {
		return users;
	}

	public void setUsers(Set<UserDetails> users) {
		this.users = users;
	}
}