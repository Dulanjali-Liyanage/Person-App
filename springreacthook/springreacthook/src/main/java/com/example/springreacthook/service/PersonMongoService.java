package com.example.springreacthook.service;


import com.example.springreacthook.dao.PersonMongoDao;
import com.example.springreacthook.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PersonMongoService {
    private PersonMongoDao personMongoDao;

    @Autowired //auto wiring to the PersonDao interface
    public PersonMongoService(@Qualifier("mongodb") PersonMongoDao personMongoDao){ //@Qualifier is used to identify between multiple implementations of PersonDao
        this.personMongoDao = personMongoDao;
    }

    public void addPerson(Person person){
        UUID id = UUID.randomUUID();
        personMongoDao.insert(new Person(id,person.getName()));
    }

    public List<Person> getAllPeople(){
        return personMongoDao.findAll();
    }

    public int deletePerson(UUID id){
        return personMongoDao.deletePersonById(id);
    }

    public Optional<Person> selectPersonById(UUID id) {
        return personMongoDao.findById(id);
    }

    public void updatePersonById(UUID id, Person updatedPerson) {
        personMongoDao.save(new Person(id,updatedPerson.getName()));
    }

}