function fideua() {
    const noodles = Number(document.getElementById("fideos").value);
    const prawns = Number(document.getElementById("gambas").value);
    const squid = Number(document.getElementById("calamares").value);
    const numberFriends = Number(document.getElementById("numFriends").value);

    const priceNoodles = noodles * (0.125 * numberFriends); //precio por persona de este ingrediente
    const pricePrawns = prawns * (0.50 * numberFriends);
    const priceSquid = squid * (0.100 * numberFriends);

    const totalPrice = (priceNoodles + pricePrawns + priceSquid);
    const priceForPerson = totalPrice / numberFriends;

    document.getElementById('message').innerHTML = `Para una fideuá de ${numberFriends} personas se necesitan:<br>
    <br>
    - Fideos: 125 gramos a ${priceNoodles}€ por persona.<br>
    - Gambas: 50 gramos a ${pricePrawns}€ por persona.<br>
    - Calamares: 100 gramos a ${priceSquid}€ por persona.<br>
    <br>
    El precio TOTAL POR PERSONA es de ${priceForPerson}€.<BR>
    <br>
    TOTAL FIDEUÁ: ${totalPrice}€ `
}