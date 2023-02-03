export async function sendMessageToTelegram(msg) {
    let botToken = "5798263743:AAE7LUpTMzAugW2f5rSUX9XSpzHkJk1TyDw";
    let userID = "5229500072";
    //let msg = "you add " + todoName + " to your to do list";
    let msgToUser = msg.replaceAll(" ", "%20");
    let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${userID}&text=${msgToUser}`;

    await fetch(url, {
        method: "GET",
    }).then(
        (success) => {
            console.log("sending message to user done");
        },
        (error) => {
            console.log("error sending message to user");
        }
    );
}
