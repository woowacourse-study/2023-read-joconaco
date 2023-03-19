#!/bin/bash 
# 2023/03/19 0chil
# Chapter */*.md -> astro/~~/docs/en/chapter */*.md 로 복사하고, 사이드바에 링크를 추가하는 스크립트입니다.

astroDir='astro';
copyTargetDir="$astroDir/src/content/docs/en";

perl -0777 -i -pe 's/^export const SIDEBAR: Sidebar = {.+;\n$//gms' "$astroDir/src/consts.ts"  # 기존 사이드바 제거
rm -r "$copyTargetDir";
{
    mkdir -p "$copyTargetDir";
    cp 'README.md' "$copyTargetDir";
    echo "export const SIDEBAR: Sidebar = {";
    echo "  en :{";
    for chapter in Chapter*; do
        chapterSpaceRemoved=${chapter// /};
        mkdir -p "$copyTargetDir/$chapter";
        echo "  '$chapter':  [";
        for file in "$chapter"/*.md; do
            filenameWithoutExtension=${file#Chapter*/}; # Chapter* 제거
            filenameWithoutExtension=${filenameWithoutExtension%.md} # .md 제거
            copyDestination=${file%.md} # .md 확장자 제거
            copyDestination=${copyDestination//./-} # '.' 을 '-'로 대체
            copyDestination=${copyDestination//\~/_} # '~'을 '_'로 대체
            # 결과 copyDestination = 'Chapter 1/1-1'
            accessUrl=${copyDestination// /-} # ' ' 을 '-'로 대체
            accessUrl=${accessUrl//C/c} # C를 c로 대체
            
            cp "$file" "$copyTargetDir/$copyDestination.md";
            echo "      { text: '$filenameWithoutExtension', link: 'en/$accessUrl' },";
        done
        echo "  ],";
    done
    echo "  }";
    echo "};";
} >> "$astroDir/src/consts.ts"; # 새로 만든 사이드바에 작성
