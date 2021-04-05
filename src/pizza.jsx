import React from 'react';
import MediaCard from "./mediacard.jsx";
import "./pizza.css";


let pizza = [
  {
    name: "Фирменная",
    value: "Ветчина, салями, помидоры Черри, сыр Фета, соус Пикантный, базилик свежий, сыр Моцарелла, соус, специи Вес: 500г",
    price: "13.50 руб",
    image: "//m.kedem.ru/photo/recipe/rnamebig/italyanskaya-picca.jpg",
  },
  {
    name: "Маргарита",
    value: "Помидоры Черри, сыр Фета, соус Пикантный, базилик свежий, сыр Моцарелла, соус, специи Вес: 450г",
    price: "10.50 руб",
    image: "//gotovim-doma.ru/images/recipe/5/e9/5e959e5cda3cb3d25a7fb9a469a65f3d.jpg",
  },
  {
    name: "Овощная",
    value: "Баклажан, цукини, перец сладкий, лук красный, шампиньоны, руккола, соус Терияки, сыр Моцарелла, специи Вес: 300г",
    price: "9.00 руб",
    image: "//www.pizzburg.by/content/thumb/img_7366_1000_1000.jpg",
  },
  {
    name: "Королевская",
    value: "Креветки, лук красный, шампиньоны, руккола, соус Терияки, сыр Моцарелла, специи Вес: 300г",
    price: "15.00 руб",
    image: "//www.pizzburg.by/content/thumb/img_7366_1000_1000.jpg",
  }

]

class Pizza extends React.Component {

  render() {
    return (
      <div className="wrap margin_left">
        {          
          pizza.map((el, i) => {
            return (
              <MediaCard name={el.name}
                value={el.value}
                price={el.price}
                image={el.image}
              />
            )
          })
        }
      </div>
    )    
  }

}

export default Pizza;