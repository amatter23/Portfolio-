// get data
fetch('https://api.npoint.io/acec756575d150a693dc')
    .then(result => result.json())
    .then((output) => {
        console.log(output);
      //get cards div from html
    const card_contaner= document.querySelector(`#cards`);
    let count = 0
    //creat a loop in projects opject
    output.projects.forEach(cardnum => {
      count = count+1
      //creat card div
      const card = document.createElement(`div`)
      card.classList.add(`card`)
      //creat content div
      const content = document.createElement(`div`)
      content.classList.add(`content`)
      //add content div to card div 
      card.appendChild(content)
      //creat lift_info div
      const lift_info = document.createElement(`div`)
      lift_info.classList.add(`lift_info`)
      //add lift_info div to content div 
      content.appendChild(lift_info)
      //creat lift_info div
      const name_and_dis = document.createElement(`div`)
      name_and_dis.classList.add(`name_and_dis`)
      //add name_and_dis div to lift_info div
      lift_info.appendChild(name_and_dis)
      //creat name h2
      const project_name = document.createElement(`h2`)
      project_name.innerHTML = cardnum.name
      name_and_dis.appendChild(project_name)
      // creat description b
      const project_description= document.createElement(`b`)
      project_description.innerHTML = cardnum.description
      name_and_dis.appendChild(project_description)
      //creat language div
      const project_language = document.createElement(`div`)
      project_language.classList.add(`language`)
      //add name_and_dis div to lift_info div
      lift_info.appendChild(project_language)
      //add a languages to div
      cardnum.used_language.forEach(lang =>{
        const lan =  document.createElement(`h5`)
        lan.innerHTML = lang
        project_language.appendChild(lan)
      })
      //creat links div
      const links = document.createElement(`div`)
      links.classList.add(`links`)
      //add links_div div to content div
      content.appendChild(links)
      //creat a link to github link
      const github_link = document.createElement(`a`)
      github_link.href = cardnum.github_link
      github_link.innerHTML= `<i class="fa-brands fa-square-github link_in"></i>GitHub`
      links.appendChild(github_link)
      //creat a link to website link
      const project_link = document.createElement(`a`)
      project_link.href = cardnum.link
      project_link.innerHTML= `<i class="fa-solid fa-address-card link_in"></i>website`
      links.appendChild(project_link)
      //creat project num h1
      const project_num = document.createElement(`h1`)
      project_num.classList.add(`project_num`)
      var text = document.createTextNode(count);
      project_num.appendChild(text);
      card.appendChild(project_num)
      //creat project img
      const project_img = document.createElement(`img`)
      project_img.src = cardnum.img
      // project_img.target = `_blank`
      // project_img.title = `Download from USAupload | Upload Files for free`
      card.appendChild(project_img)
      //add card div to cards div in html
      card_contaner.appendChild(card)
    });
}).catch(err => console.error(err));
