package com.pedrogrigorio.restaurantmenu.controller;

import com.pedrogrigorio.restaurantmenu.food.Food;
import com.pedrogrigorio.restaurantmenu.food.FoodRepository;
import com.pedrogrigorio.restaurantmenu.food.FoodRequestDTO;
import com.pedrogrigorio.restaurantmenu.food.FoodResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("food")
public class FoodController {

    @Autowired
    private FoodRepository repository;

    @GetMapping
    public List<FoodResponseDTO> getAll() {
        List<FoodResponseDTO> foodList = repository.findAll().stream().map(FoodResponseDTO::new).toList();
        return foodList;
    }

    @PostMapping
    public void saveFood(@RequestBody FoodRequestDTO data) {
        System.out.println("entrou");
        Food foodData = new Food(data);
        System.out.println("criou");
        repository.save(foodData);
    }

}
