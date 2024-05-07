

    const store = f3.createStore({
        data: data(),
        node_separation: 250,
        level_separation: 150
      }),
      view = f3.d3AnimationView({
        store,
        cont: document.querySelector("#FamilyChart")
      }),
      Card = f3.elements.Card({
        store,
        svg: view.svg,
        card_dim: {w:220,h:70,text_x:75,text_y:15,img_w:60,img_h:60,img_x:5,img_y:5},
        card_display: [d => `${d.data['first name'] || ''} ${d.data['last name'] || ''}`,d => `${d.data['birthday'] || ''}`],
        mini_tree: true,
        link_break: false
      })

    view.setCard(Card)
    store.setOnUpdate(props => view.update(props || {}))
    store.update.tree({initial: true})

    function data() {
      return [
  {
    "id": "0",
    "rels": {},
    "data": {
      "first name": "Name",
      "last name": "Surname",
      "birthday": 1970,
      "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg",
      "gender": "M"
    }
  }
];
    }

