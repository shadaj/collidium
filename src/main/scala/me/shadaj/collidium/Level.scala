package me.shadaj.collidium

class Level(val name: String, val cannonLocation: (Float, Float), val margin: Int, val obstacles: List[Sprite], val ball: Circle, val hole: Circle, val friction: Double)