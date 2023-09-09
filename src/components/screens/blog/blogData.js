const blogData = [
    {
        id: 1,
        img: "/img/supreme-nike.jpg",
        data: "11 Sep, 2022",
        title: 'New supreme 2022 collection',
        subtitle: "The pack will consist of two models of \"blazers\". One of these will be the black coloring \"Black / Golden Yellow\". This Supreme x Nike SB pair features the same stitched, quilted leather upper, orange-brown faux snakeskin Swoosh, and metallic D-rings on the heel.",
    },
    {
        id: 2,
        img: "/img/red-boot.jpg",
        data: "16 Jun, 2021",
        title:"Why Is Everyone Wearing These Cartoonish Red Boots?",
        subtitle:"Every New York Fashion Week, certain designer items emerge as the fashion crowd’s favorites. Last year, everyone was wearing the Prada logo tank tops and minimal strappy heels by The Row. This past week, however, dainty Manolos were eclipsed by one shoe destined to go viral: MSCHF’s big red boots, aptly named the Big Red Boot.",
    },
    {
        id: 3,
        img: "/img/balaclav.jpg",
        data: "29 May, 2023",
        title:"All the Cool Kids Are Wearing Balaclavas",
        subtitle:"I remember the first time I took note of the balaclava. It was a little over a year ago, at a crowded house party in deep Brooklyn. A lanky, twenty-something man wore a bright orange balaclava—despite the tropical microclimate created by all the packed, dancing bodies. He took nonchalant sips from a red Solo cup, mesmerizingly comfortable in his anonymity. ",
    },
    {
        id: 4,
        img: "/img/rocky-newss.jpg",
        data: "16 Jun, 2021",
        title:"Asap rocky wear a lot of sport wear, why?",
        subtitle:"Fashion Bomb Couple: Rihanna Wore a Pink SavageXFenty Xssential Bralette and Relaxed Pants Set on a Date with A$AP Rocky in Santa Monica. The ‘We Found Love’ singer Rihanna and her rumored hubby A$AP Rocky stepped out in Santa Monica for yet another dining outing at their go-to restaurant Giorgio Baldi’s in Santa",
    },
    {
        id: 5,
        img: "/img/alyx.jpg",
        data: "16 Jun, 2021",
        title:"Hardest collab of the year",
        subtitle:"1017 Alyx 9SM evolves into a new era for AW22\n" +
            "For its first Milan Fashion Week show, Matthew Williams' label offered a collection that echoed the precarity of life today.",
    },
    {
        id: 6,
        img: "/img/nike-skils.jpg",
        data: "16 Jun, 2021",
        title:"About last nike skills",
        subtitle:"The shoes in question are modified Nike Air Max 97s, and have been released in a limited collection of 666 pairs. They feature an inverted cross, a pentagram and read \"Luke 10:18\". Most controversially they are purported to contain drops of human blood.",
    },
    {
        id: 7,
        img: "/img/red-boot.jpg",
        data: "16 Jun, 2021",
        title:"Why Is Everyone Wearing These Cartoonish Red Boots?",
        subtitle:"Every New York Fashion Week, certain designer items emerge as the fashion crowd’s favorites. Last year, everyone was wearing the Prada logo tank tops and minimal strappy heels by The Row. This past week, however, dainty Manolos were eclipsed by one shoe destined to go viral: MSCHF’s big red boots, aptly named the Big Red Boot.",
    },
    {
        id: 8,
        img: "/img/red-boot.jpg",
        data: "16 Jun, 2021",
        title:"Why Is Everyone Wearing These Cartoonish Red Boots?",
        subtitle:"Every New York Fashion Week, certain designer items emerge as the fashion crowd’s favorites. Last year, everyone was wearing the Prada logo tank tops and minimal strappy heels by The Row. This past week, however, dainty Manolos were eclipsed by one shoe destined to go viral: MSCHF’s big red boots, aptly named the Big Red Boot.",
    },
    {
        id: 9,
        img: "/img/red-boot.jpg",
        data: "16 Jun, 2021",
        title:"Why Is Everyone Wearing These Cartoonish Red Boots?",
        subtitle:"Every New York Fashion Week, certain designer items emerge as the fashion crowd’s favorites. Last year, everyone was wearing the Prada logo tank tops and minimal strappy heels by The Row. This past week, however, dainty Manolos were eclipsed by one shoe destined to go viral: MSCHF’s big red boots, aptly named the Big Red Boot.",
    },
    {
        id: 10,
        img: "/img/red-boot.jpg",
        data: "16 Jun, 2021",
        title:"Why Is Everyone Wearing These Cartoonish Red Boots?",
        subtitle:"Every New York Fashion Week, certain designer items emerge as the fashion crowd’s favorites. Last year, everyone was wearing the Prada logo tank tops and minimal strappy heels by The Row. This past week, however, dainty Manolos were eclipsed by one shoe destined to go viral: MSCHF’s big red boots, aptly named the Big Red Boot.",
    },
    {
        id: 11,
        img: "/img/red-boot.jpg",
        data: "16 Jun, 2021",
        title:"Why Is Everyone Wearing These Cartoonish Red Boots?",
        subtitle:"Every New York Fashion Week, certain designer items emerge as the fashion crowd’s favorites. Last year, everyone was wearing the Prada logo tank tops and minimal strappy heels by The Row. This past week, however, dainty Manolos were eclipsed by one shoe destined to go viral: MSCHF’s big red boots, aptly named the Big Red Boot.",
    },
    {
        id: 12,
        img: "/img/red-boot.jpg",
        data: "16 Jun, 2021",
        title:"Why Is Everyone Wearing These Cartoonish Red Boots?",
        subtitle:"Every New York Fashion Week, certain designer items emerge as the fashion crowd’s favorites. Last year, everyone was wearing the Prada logo tank tops and minimal strappy heels by The Row. This past week, however, dainty Manolos were eclipsed by one shoe destined to go viral: MSCHF’s big red boots, aptly named the Big Red Boot.",
    },
    {
        id: 13,
        img: "/img/red-boot.jpg",
        data: "16 Jun, 2021",
        title:"Why Is Everyone Wearing These Cartoonish Red Boots?",
        subtitle:"Every New York Fashion Week, certain designer items emerge as the fashion crowd’s favorites. Last year, everyone was wearing the Prada logo tank tops and minimal strappy heels by The Row. This past week, however, dainty Manolos were eclipsed by one shoe destined to go viral: MSCHF’s big red boots, aptly named the Big Red Boot.",
    },
    {
        id: 14,
        img: "/img/red-boot.jpg",
        data: "16 Jun, 2021",
        title:"Why Is Everyone Wearing These Cartoonish Red Boots?",
        subtitle:"Every New York Fashion Week, certain designer items emerge as the fashion crowd’s favorites. Last year, everyone was wearing the Prada logo tank tops and minimal strappy heels by The Row. This past week, however, dainty Manolos were eclipsed by one shoe destined to go viral: MSCHF’s big red boots, aptly named the Big Red Boot.",
    },
    {
        id: 15,
        img: "/img/red-boot.jpg",
        data: "16 Jun, 2021",
        title:"Why Is Everyone Wearing These Cartoonish Red Boots?",
        subtitle:"Every New York Fashion Week, certain designer items emerge as the fashion crowd’s favorites. Last year, everyone was wearing the Prada logo tank tops and minimal strappy heels by The Row. This past week, however, dainty Manolos were eclipsed by one shoe destined to go viral: MSCHF’s big red boots, aptly named the Big Red Boot.",
    }

]

export default blogData