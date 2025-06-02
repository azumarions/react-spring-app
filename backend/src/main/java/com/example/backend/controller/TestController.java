package com.example.backend.controller;

 import com.example.backend.service.TestService;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Controller;
 import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.RequestMapping;
 import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("api")
public class TestController {
    private final TestService testService;

    @Autowired
    public TestController(TestService testService) {
        this.testService = testService;
    }

    @GetMapping("test")
    @ResponseBody
    public String test() {
         return String.valueOf(testService.findAll());
     }

    @GetMapping("test1")
    @ResponseBody
    public String test1() {
        return String.valueOf(testService.findTestById(1));
    }

    @GetMapping("test2")
    @ResponseBody
    public String test2() {
        return "test23";
    }
 }
 