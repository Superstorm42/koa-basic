const Koa = require("koa");
const KoaRouter = require("koa-router");
const json = require("koa-json");
const path = require("path");
const render = require("koa-ejs");

const app = new Koa();
const router = new KoaRouter();

// Replace with DB
const projects = ["GBari", "E-saver", "Emedi", "CascAid", "Riverus", "BUT"];

app.use(json());
// app.use(
// 	async (ctx) =>
// 		(ctx.body = {
// 			success: true,
// 			message: "Hello world!",
// 		})
// );

render(app, {
	root: path.join(__dirname, "views"),
	layout: "layout",
	viewExt: "html",
	cache: false,
	debug: false,
});

// Routes
router.get("/", index);
routes.get("/add", showAdd);

// List of things
async function index(ctx) {
	await ctx.render("index", {
		title: "Home Page",
		projects,
	});
}

router.get("/test", (ctx) => (ctx.body = "Hello test"));
app.use(router.routes()).use(router.allowedMethods());

app.listen(8000, () => {
	console.log("Server started at 8000.");
});
