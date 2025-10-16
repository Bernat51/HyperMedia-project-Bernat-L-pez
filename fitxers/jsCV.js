function feines() {
    let feina = document.getElementsByName("feines")[0].value;
    if(feina === "arbitre"){
        document.getElementById("descripFeina").innerHTML = "<h3>Arbitre de la FCBQ (Girona)</h3><p><b>Febrer 2022 - ...</b></p><p>Cada cap de setmana exerceixo com a àrbitre de bàsquet, el que m'ha dotat d'una excepcional capacitat per prendre decisions ràpides i imparcials en situacions exigents. A més, he desenvolupat habilitats avançades de comunicació, permetent-me interactuar de manera asertiva i respectuosa amb entrenadors i jugadors.</p>";
    }
    else if(feina === "entrenador"){
        document.getElementById("descripFeina").innerHTML = "<h3>Entrenador de bàsquet del CE Vilafant</h3><p><b>Setembre 2021 - Maig 2023</b></p><p>Durant un període de dos anys vaig exercir el rol d'entrenador, dedicant-me a motivar i guiar als nens i nenes en la millora de les seves habilitats esportives. Vaig posar un fort èmfasi en el treball en equip, fomentant la colaboració i la comunicació entre els membres de l'equip</p>";
    }
    else if(feina === "monitor"){
        document.getElementById("descripFeina").innerHTML = "<h3>Monitor de lleure</h3><p><b>Juliol 2024 - Agost 2024 i Juliol 2025</b></p><p>Durant l’estiu, vaig treballar com a monitor de lleure a casals com el de Vilafant o la Brigada Jove de Navata , on vaig adquirir experiència en l’àmbit del lleure infantil. Aquesta etapa em va permetre desenvolupar habilitats per afrontar imprevistos i resoldre situacions amb eficàcia, aportant-me eines valuoses per a futurs entorns de treball similars.</p>";
    }
    else if(feina === "informatic"){
        document.getElementById("descripFeina").innerHTML = "<h3>Informàtic (aprenent)</h3><p><b>Juny 2025 - Setembre 2025</b></p><p>Durant l'estiu vaig tenir l'oportunitat de treballar en un entorn professional on vaig poder aplicar i ampliar els meus coneixements en informàtica. La feina consistia en actualitzar la pàgina web la secció d'Economia Social de la Universitat Internacional de Catalunya (UIC). Aquesta experiència em va permetre desenvolupar habilitats tècniques i professionals que seran de gran utilitat en la meva futura carrera.</p><p>Si voleu consultar la pàgina web, podeu fer-ho a través d'aquest enllaç: <a href='https://economiasocial.uic.es' target=\"_blank\">https://economiasocial.uic.es</a></p>";
    }
}
