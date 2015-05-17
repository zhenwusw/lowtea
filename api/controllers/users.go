package controllers

import (
	"github.com/astaxie/beego"
)

type UsersController struct {
	beego.Controller
}

func (c *UsersController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplNames = "users.tpl"
}
