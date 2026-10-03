(function () {
  function strip() {
    var root = document.querySelector("article")
    if (!root) return
    var nodes = root.querySelectorAll("p, li, h1, h2, h3")
    nodes.forEach(function (el) {
      var t = (el.textContent || "").replace(/\s+/g, " ").trim()
      if (/^title\s*:/i.test(t) || /^aliases\s*:/i.test(t) || /^tags\s*:/i.test(t) || /^description\s*:/i.test(t)) {
        el.style.display = "none"
        if (el.tagName === "LI" && el.parentElement && el.parentElement.children.length === 1) {
          el.parentElement.style.display = "none"
        }
      }
    })
    var firstHr = root.querySelector("hr")
    if (firstHr) firstHr.style.display = "none"
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", strip)
  else strip()
})()
