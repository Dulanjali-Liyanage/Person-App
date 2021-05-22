package com.example.springreacthook;

import com.example.springreacthook.api.PersonMongoControllerGet;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

//smoke testing is type of testing software testing that
//determines whether the deployed build is stable or not
//smoke test run on each build

@SpringBootTest
public class SmokeTest {

    @Autowired
    private PersonMongoControllerGet personMongoControllerGet;

    @Test
    void contextLoads() {
        //checking whether personMongoController is null or not
        assertThat(personMongoControllerGet).isNotNull();
    }
}
