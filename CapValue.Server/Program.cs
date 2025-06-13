using CapValue.Server.Data;
using CapValue.Server.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// 1. Chargement des utilisateurs depuis appsettings.json (optionnel mais sécurisé)
builder.Services.Configure<List<User>>(builder.Configuration.GetSection("Users"));

// 2. Configuration de la base de données SQLite
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite("Data Source=capvalue.db"));

// 3. Ajout des services nécessaires
builder.Services.AddControllers();

// 4. Configuration CORS pour autoriser le frontend React (localhost:5174)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
    {
        policy.WithOrigins("http://localhost:5174") // Frontend React
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// 5. Initialisation de la base avec des utilisateurs si vide
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<ApplicationDbContext>();
    var users = services.GetRequiredService<IOptions<List<User>>>();
    SeedData.Initialize(context, users);
}

// 6. Middlewares
app.UseHttpsRedirection();
app.UseCors("AllowReact");
app.UseAuthorization();

// 7. Routes
app.MapControllers();

// 8. Lancement de l'application
app.Run();
