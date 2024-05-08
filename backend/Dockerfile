FROM mcr.microsoft.com/dotnet/sdk:8.0-cbl-mariner2.0-arm64v8

WORKDIR /app

COPY API/bin/Release/net8.0/publish .

COPY API.pfx /root/.aspnet/dev-certs/https/API.pfx

ENV ASPNETCORE_Kestrel__Certificates__Default__Path=/root/.aspnet/dev-certs/https/API.pfx

EXPOSE 8080

ENTRYPOINT ["dotnet", "API.dll"]
