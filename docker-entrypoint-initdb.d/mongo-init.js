db = db.getSiblingDB("admin");
db.createUser({
  user: "tl_admin",
  pwd: "admin",
  roles: [{ role: "readWrite", db: "tracklife_db" }],
});
