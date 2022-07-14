```POST /api/v1/users/:user_id/cards
Content-Type: application/json
Accept: application/json
body: {
  "category": "technicalBE",     <-- (or "technicalFE", "behavioral")
  "frontSide": "What is MVC?",
  "backSide": "stuff and things",     <-- (optional)
}```