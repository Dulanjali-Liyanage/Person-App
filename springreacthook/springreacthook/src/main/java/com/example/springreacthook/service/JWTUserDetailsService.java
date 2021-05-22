package com.example.springreacthook.service;

import com.example.springreacthook.dao.UserDao;
import com.example.springreacthook.model.UserD;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JWTUserDetailsService implements UserDetailsService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserD user = userDao.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                new ArrayList<>());
    }
    public UserD save(UserD user) {
        //DAOUser newUser = new DAOUser();
        user.setUsername(user.getUsername());
        user.setPassword(bcryptEncoder.encode(user.getPassword()));
        return userDao.save(new UserD(user.getUsername(),user.getPassword()));
    }
}
