package com.ssafy.B306.domain.quizbook.dto;

import com.ssafy.B306.domain.quiz.dto.QuizRequestSaveDto;
import com.ssafy.B306.domain.quizbook.QuizBook;
import com.ssafy.B306.domain.user.User;
import lombok.*;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class QuizBookSaveRequestDto {
    @NotNull(message = "문제집 제목을 입력해주세요")
    private String quizBookTitle;

    private List<QuizRequestSaveDto> quizzes = new ArrayList<>();

    private User userPk;

    public QuizBookSaveRequestDto(String quizBookTitle, List<QuizRequestSaveDto> quizzes, User userPk) {
        this.quizBookTitle = quizBookTitle;
        this.quizzes = quizzes;
        this.userPk = userPk;
    }

    @Builder


    /*
    userId가 null인 이유 -> userId를 안넣어서
     */
    public QuizBook toEntity(QuizBookSaveRequestDto quizBookSaveRequestDto) {
        return QuizBook.builder()
                .quizBookTitle(quizBookSaveRequestDto.getQuizBookTitle())
                .quizBookUserId(quizBookSaveRequestDto.getUserPk())
                .build();
    }
}
