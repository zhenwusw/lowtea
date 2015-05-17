package routers

import (
	"github.com/astaxie/beego"
	"github.com/zhenwusw/lowtea/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
}
