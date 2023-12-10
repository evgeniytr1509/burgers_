import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  currency = '$';

  form = this.fb.group({
    order: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required],
  });

  productsData = [
    {
      image: "1.png",
      title: "Бургер чеддер & бекон",
      text: "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус",
      price: 8,
      basePrise: 8,
      grams:360
    },

    {
      image: "2.png",
      title: "BBQ с беконом и курицей",
      text: "Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ",
      price: 8,
      basePrise: 8,
      grams:360
    },

    {
      image: "3.png",
      title: "Дабл биф бургер",
      text: "Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук,соус бургер, горчица",
      price: 8,
      basePrise: 8,
      grams:360
    },
    {
      image: "4.png",
      title: "Баварский бургер",
      text: "Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг",
      price: 8,
      basePrise: 8,
      grams:360
    },
    {
      image: "5.png",
      title: "Бекон чизбургер",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень",
      price: 8,
      basePrise: 8,
      grams:360
    },
    {
      image: "6.png",
      title: "Индиана бургер",
      text: "Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 8,
      basePrise: 8,
      grams:360
    },
    {
      image: "7.png",
      title: "Вегги бургер",
      text: "Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг",
      price: 8,
      basePrise: 8,
      grams:360
    },
    {
      image: "8.png",
      title: "Плаксивый Джо",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень",
      price: 8,
      basePrise: 8,
      grams:360
    },
    {
      image: "9.png",
      title: "Двойной чиз бургер",
      text: "Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат",
      price: 8,
      basePrise: 8,
      grams:360
    },

    {
      image: "10.png",
      title: "Фрешбургер",
      text: "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус",
      price: 8,
      basePrise: 8,
      grams:360
    },

    {
      image: "11.png",
      title: "Цуккини бургер",
      text: "Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень",
      price: 8,
      basePrise: 8,
      grams:360
    },
    {
      image: "12.png",
      title: "Двойной бургер чеддар",
      text: "Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень",
      price: 8,
      basePrise: 8,
      grams:360
    },


  ];


  constructor(private fb: FormBuilder) {

  }
  scrollTo(target: HTMLElement, burger?: any){
    target.scrollIntoView({behavior: "smooth"});
    if (burger) {
      this.form.patchValue({order: burger.title + ' (' + burger.price + ' ' + this.currency + ')'});
    }
  }
  confirmOrder(){
    if (this.form.valid) {
      alert("Спасибо за заказ! Мы скоро свяжемся с Вами!");
      this.form.reset();
    }
  }

  changeCurrency() {
    let newCurrency = "$";
    let coefficient = 1;

    if (this.currency === "$") {
      newCurrency = "₽";
      coefficient = 80;
    } else if (this.currency === "₽") {
      newCurrency = "BYN";
      coefficient = 3;
    } else if (this.currency === "BYN") {
      newCurrency = "¥";
      coefficient = 7.14;
    } else if (this.currency === "¥") {
      newCurrency = "€";
      coefficient = 0.9;
    }

    this.currency = newCurrency;

    this.productsData.forEach((item: any)=>{
      item.price = +(item.basePrise*coefficient).toFixed(1);
      })

  }
}



