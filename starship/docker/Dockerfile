# ARG BASE_IMAGE
# ARG VERSION
# FROM ${BASE_IMAGE}:${VERSION} AS source

FROM ghcr.io/liftedinit/manifest-ledger:v0.0.1-alpha.13 as source

FROM alpine:3.16

LABEL org.opencontainers.image.source="https://github.com/cosmology-tech/starship"

COPY --from=source /bin /usr/bin
COPY --from=source /lib /usr/lib

# Set up dependencies
ENV PACKAGES curl make bash jq sed

# Install minimum necessary dependencies
RUN apk add --no-cache $PACKAGES

WORKDIR /opt
