const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});

function showMap(schoolId) {
    const mapContainer = document.getElementById("map-container");
    const schoolMap = document.getElementById("school-map");

    let mapSrc = "";

    if (schoolId === 'school1') {
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.634595976674!2d112.79235037454626!3d-7.2823506715688735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa1323221a93%3A0x306c3c99adedb258!2sInstitut%20Teknologi%20Sepuluh%20Nopember!5e0!3m2!1sid!2sid!4v1726704098707!5m2!1sid!2sid";
    } else if (schoolId === 'school2') {
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.238195691387!2d113.70465307456021!3d-8.178742681985645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd694292266d7e3%3A0x9e45238610fdf1cf!2sSMA%20Negeri%201%20Jember!5e0!3m2!1sid!2sid!4v1726704047760!5m2!1sid!2sid";
    } else if (schoolId === 'school3') {
        mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.3545412537896!2d113.70174767456!3d-8.166989881840593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd69430acacbf1f%3A0x7e53e05c3a1d7759!2sSMP%20Negeri%202%20Jember!5e0!3m2!1sid!2sid!4v1726703992556!5m2!1sid!2sid";
    }

    schoolMap.src = mapSrc;
    mapContainer.style.display = "block";
}
