package com.lacunza.telemetry.dashboard.model;

public record StatusItem(String zone, int ok, int warning, int error) {}
