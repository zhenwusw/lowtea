package main

import (
	"github.com/astaxie/beego"
	_ "github.com/zhenwusw/lowtea/api/routers"
)

func main() {
	beego.Run()
}
