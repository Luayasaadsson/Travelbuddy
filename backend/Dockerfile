FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
COPY ["API/API.csproj", "API/"]
RUN dotnet restore "API/API.csproj"
COPY . .
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "API.dll"]

ENV OPENAI_API_KEY=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
ENV GOOGLE_OAUTH_CLIENT_ID=299817103719-sgecp2fpqbapdk20c4b8go2e6g8v9t4f.apps.googleusercontent.com
ENV GOOGLE_OAUTH_CLIENT_SECRET=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

EXPOSE 8080
