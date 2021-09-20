FROM devkitpro/devkitarm:20210726

RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs xxd vim

RUN mkdir -p /root/opt/ && \
    wget -c https://github.com/moxon6/nds-dependencies/releases/download/0.1/wasm3-nds.tar.gz -O - | tar -xz -C /root/opt && \
    wget -c https://github.com/moxon6/nds-dependencies/releases/download/0.1/nflib-nds.tar.gz -O - | tar -xz -C /root/opt
