$('#example').czmChatSupport({

    /* Button Settings */
    button: {
        position: "right", /* left, right or false. "position:false" does not pin to the left or right */
        style: 3, /* Button style. Number between 1 and 7 */
        src: '<i class="fab fa-whatsapp"></i>', /* Image, Icon or SVG */
        backgroundColor: "#10c379", /* Html color code */
        effect: 4, /* Button effect. Number between 1 and 7 */
        notificationNumber: "2", /* Custom text or false. To remove, (notificationNumber:false) */
        speechBubble: "Tanya tanya tentang harga", /* To remove, (speechBubble:false) */
        pulseEffect: false, /* To remove, (pulseEffect:false) */
        text: { /* For Button style larger than 1 */
       
        src: '<i class="fab fa-whatsapp"></i>', /* Image, Icon or SVG */ title:"Hubungi Team!", /* Writing is required */
            description: "Mon-Sat: 10:00/22:00", /* To remove, (description:false) */
            online: "Now Online", /* To remove, (online:false) */
            offline: "I will be back soon" /* To remove, (offline:false) */
        }
    },

    /* Popup Settings */
    popup: {
        automaticOpen: false, /* true or false (Open popup automatically when the page is loaded) */
        outsideClickClosePopup: true, /* true or false (Clicking anywhere on the page will close the popup) */
        effect: 1, /* Popup opening effect. Number between 1 and 15 */
        header: {
            backgroundColor: "#10c379", /* Html color code */
            title: "Klik salah satu Team blessing_store", /* Writing is required */
            description: "Untuk tanya tanya Klik salah satu Team Blessing_Store" /* To remove, (description:false) */
        },

        /* Representative Settings */
        persons: [

            /* Copy for more representatives [::Start Copy::] */
            {
                avatar: {
                    src: '<img src="assets/img/team/itin.jpg" alt="kk Crhistin">', /* Image, Icon or SVG */
                    backgroundColor: "#10c379", /* Html color code */
                    onlineCircle: true /* Avatar online circle. To remove, (onlineCircle:false) */
                },
                text: {
                    title: "Kk Christin", /* Writing is required */
                    description: "Blessing_Store", /* To remove, (description:false) */
                    online: "Sa Online", /* To remove, (online:false) */
                    offline: "Nanti sa kembali lagi" /* To remove, (offline:false) */
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=+6282223691434&text=Hi, Christin!", /* Writing is required */
                    mobile: "https://wa.me/+62822-2369-1434/?text=Hi, Kk Christin!" /* If it is hidden desktop link will be valid. To remove, (mobile:false) */
                },
                onlineDay: {
                    /* Change the day you are offline like this. (sunday:false) */
                    sunday: "09:00-20:59",
                    monday: "09:00-20:59",
                    tuesday: "09:00-20:59",
                    wednesday: "09:00-20:59",
                    thursday: "09:00-20:59",
                    friday: "09:00-20:59",
                    saturday: "09:00-20:59"
                }
            },
            /* [::End Copy::] */

            /* Copy for more representatives [::Start Copy::] */
            {
                avatar: {
                    src: '<img src="assets/img/team/hasep.jpg" alt="Kk Hasep">', /* Font, Image or SVG */
                    backgroundColor: "#10c379", /* Html color code */
                    onlineCircle: true /* Avatar online circle. To remove, (onlineCircle:false) */
                },
                text: {
                    title: "Kk Hasep", /* Writing is required */
                    description: "Team Blessing_Store", /* Custom text or false. To remove, (description:false) */
                    online: "Sa Online", /* Custom text or false. To remove, (online:false) */
                    offline: "Nanti sa kembali lagi" /* Custom text or false. To remove, (offline:false) */
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=+62081248313786&text=Hi, Hasep!", /* Writing is required */
                    mobile: "https://wa.me/+62081248313786/?text=Hi, Kk Hasep!" /* If it is hidden desktop link will be valid. To remove, (mobile:false) */
                },
                onlineDay: {
                    /* Change the day you are offline like this. (sunday:false) */
                    sunday: "09:00-20:59",
                    monday: "09:00-20:59",
                    tuesday: "09:00-20:59",
                    wednesday: "09:00-20:59",
                    thursday: "09:00-20:59",
                    friday: "09:00-20:59",
                    saturday: "09:00-20:59"
                }
            },
            /* [::End Copy::] */

        ]
    },

    /* Other Settings */
    sound: true, /* true (default sound), false or custom sound. Custom sound example, (sound:'assets/sound/notification.mp3') */
    changeBrowserTitle: "New Message!", /* Custom text or false. To remove, (changeBrowserTitle:false) */
    cookie: false, /* It does not show the speech bubble, notification number, pulse effect and automatic open popup again for the specified time. For example, do not show for 1 hour, (cookie:1) or to remove, (cookie:false) */
});