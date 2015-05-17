package routers

import (
	"github.com/astaxie/beego"
	"github.com/zhenwusw/lowtea/api/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/users", &controllers.UsersController{})
}
