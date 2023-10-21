package com.pedrogrigorio.restaurantmenu.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("food")
public class FoodController {

    @GetMapping
    public String getAll() {
        return "Hello, World";
    }

}
